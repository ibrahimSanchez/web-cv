

interface EnvConfig {
  formpree: string;
}

const formpree = process.env.NEXT_PUBLIC_FORMSPREE_URL;
if (!formpree) throw new Error("NEXT_PUBLIC_API_BASE_URL no está definida");


export const envConfig: EnvConfig = {
  formpree,
};