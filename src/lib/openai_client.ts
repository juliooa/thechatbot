import { PUBLIC_OPENAI_API_KEY } from '$env/static/public'
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

type ImageResponse = {
    url?: string;
    success: boolean;
    error?: string;
}

export type CompletionProps = {
    prompt: string,
    model: string,
    max_tokens: number,
    temperature: number,
}

export async function createImage(prompt: string): Promise<ImageResponse> {
    let response = await openai.createImage({
        prompt: prompt,
        size: '256x256',
    });

    if (response.data.data.length > 0) {
        return {
            url: response.data.data[0].url!,
            success: true,
        };
    } else {
        return {
            success: false,
            error: "image not generated"
        };
    }
}

export async function createCompletion(props: CompletionProps): Promise<string> {

    let response = await openai.createCompletion({
        model: props.model,
        prompt: props.prompt,
        temperature: props.temperature,
        max_tokens: props.max_tokens,
    });

    if (response.data.choices.length > 0) {
        return response.data.choices[0].text!;
    } else {
        return "";
    }
}