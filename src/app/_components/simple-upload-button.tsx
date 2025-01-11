import { useRouter } from "next/navigation";
import React from "react";
import { useUploadThing } from "~/utils/uploadthing";
import { toast } from "sonner";
import { usePostHog } from "posthog-js/react";

import LoadingSpinnerIcon from "./svg/LoadingSpinnerIcon";
import UploadIcon from "./svg/UploadIcon";

// inferred input off useUploadThing
type Input = Parameters<typeof useUploadThing>;

const useUploadThingInputProps = (...args: Input) => {
  const $ut = useUploadThing(...args);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);

    await $ut.startUpload(selectedFiles);
  };

  return {
    inputProps: {
      onChange,
      multiple: ($ut.routeConfig?.image?.maxFileCount ?? 1) > 1,
      accept: "image/*",
    },
    isUploading: $ut.isUploading,
  };
};

export function SimpleUploadButton() {
  const router = useRouter();
  const posthog = usePostHog();

  const { inputProps } = useUploadThingInputProps("imageUploader", {
    onUploadBegin: () => {
      posthog.capture("upload_begin");
      toast(
        <div className="flex items-center gap-2 text-white">
          <LoadingSpinnerIcon />
          <span className="text-lg">Uploading...</span>
        </div>,
        { duration: 100000, id: "upload-begin" },
      );
    },
    onClientUploadComplete: () => {
      toast.dismiss("upload-begin");
      toast(<span className="text-lg">Upload complete</span>);
      router.refresh();
    },
    onUploadError(error) {
      posthog.capture("upload_error", { error });
      toast.dismiss("upload-begin");
      toast.error("Upload failed");
    },
  });

  return (
    <div>
      <label htmlFor="upload-button" className="cursor-pointer">
        <UploadIcon />
      </label>
      <input
        id="upload-button"
        type="file"
        className="sr-only"
        {...inputProps}
      />
    </div>
  );
}
