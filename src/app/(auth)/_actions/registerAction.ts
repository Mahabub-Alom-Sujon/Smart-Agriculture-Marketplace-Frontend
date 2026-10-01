import { RegisterFormData } from "@/schemas/register.schema";

type RegisterPayload = Omit<
    RegisterFormData,
    "confirmPassword"
>;

type RegisterResponse = {
    success: boolean;
    message: string;
    data?: unknown;
};

export const registerAction = async (data: RegisterPayload) => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/register`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            cache: "no-store",
        }
    );

    const contentType = response.headers.get("content-type");

    if (!contentType?.includes("application/json")) {
        const text = await response.text();
        console.error("API returned:", text);
        throw new Error("API did not return JSON.");
    }
    const result: RegisterResponse = await response.json();
    if (!response.ok) {
        throw new Error(result.message || "Registration failed.");
    }
    return result;
};
