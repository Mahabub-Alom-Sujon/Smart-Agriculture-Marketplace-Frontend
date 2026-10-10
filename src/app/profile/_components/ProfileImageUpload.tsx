"use client";
import { useRef, useState } from "react";
import type { ChangeEvent } from "react";
import {
    Camera,
    LoaderCircle,
    UserRound,
} from "lucide-react";
import { toast } from "sonner";
import { uploadProfileImage } from "@/app/profile/_actions/uploadProfileImage";
interface ProfileImageUploadProps {
    name: string;
    imageUrl: string;
    onUploaded: (
        imageUrl: string,
        imagePublicId: string
    ) => void;
}

export default function ProfileImageUpload({
    name,
    imageUrl,
    onUploaded,
}: ProfileImageUploadProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [uploading, setUploading] = useState(false);
    const [preview, setPreview] = useState(imageUrl);

    const handleUpload = async (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];

        if (!file) return;

        // Allow selecting the same file again
        event.target.value = "";

        if (
            !["image/jpeg", "image/png", "image/webp"].includes(
                file.type
            )
        ) {
            toast.error("Please select a JPG, PNG, or WebP image.");
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            toast.error("Image size must be 5 MB or less.");
            return;
        }

        const objectUrl = URL.createObjectURL(file);

        setUploading(true);
        setPreview(objectUrl);

        const formData = new FormData();
        formData.append("profileImage", file);

        try {
            const result = await uploadProfileImage(formData);

            if (!result.success || !result.data?.imageUrl) {
                setPreview(imageUrl);
                toast.error(
                    result.message || "Image upload failed."
                );
                return;
            }

            setPreview(result.data.imageUrl);

            onUploaded(
                result.data.imageUrl,
                result.data.imagePublicId ?? ""
            );

            toast.success(
                result.message || "Profile image updated successfully."
            );
        } catch (error: unknown) {
            console.error("Profile image upload error:", error);

            setPreview(imageUrl);
            toast.error("Unable to upload profile image.");
        } finally {
            URL.revokeObjectURL(objectUrl);
            setUploading(false);
        }
    };

    return (
        <div className="flex flex-col items-start">
            <div className="relative">
                <div className="flex size-24 items-center justify-center overflow-hidden rounded-2xl border-4 border-white bg-emerald-50 shadow-sm ring-1 ring-slate-100">
                    {preview ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={preview}
                            alt={`${name} profile`}
                            className="size-full object-cover"
                        />
                    ) : (
                        <UserRound className="size-10 text-emerald-700" />
                    )}
                </div>

                <button
                    type="button"
                    onClick={() => inputRef.current?.click()}
                    disabled={uploading}
                    aria-label="Upload profile image"
                    className="absolute -bottom-2 -right-2 flex size-9 items-center justify-center rounded-xl border-2 border-white bg-emerald-600 text-white shadow transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {uploading ? (
                        <LoaderCircle className="size-4 animate-spin" />
                    ) : (
                        <Camera className="size-4" />
                    )}
                </button>

                <input
                    ref={inputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    className="hidden"
                    disabled={uploading}
                    onChange={handleUpload}
                />
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-400">
                JPG, PNG or WebP. Maximum size 5 MB.
            </p>

            {uploading && (
                <p className="mt-2 text-sm font-medium text-emerald-700">
                    Uploading image...
                </p>
            )}
        </div>
    );
}