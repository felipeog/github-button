/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface GithubButton {
        "repo": string;
        "theme": 'light' | 'dark';
        "user": string;
        "width": string;
    }
}
declare global {
    interface HTMLGithubButtonElement extends Components.GithubButton, HTMLStencilElement {
    }
    var HTMLGithubButtonElement: {
        prototype: HTMLGithubButtonElement;
        new (): HTMLGithubButtonElement;
    };
    interface HTMLElementTagNameMap {
        "github-button": HTMLGithubButtonElement;
    }
}
declare namespace LocalJSX {
    interface GithubButton {
        "repo": string;
        "theme"?: 'light' | 'dark';
        "user": string;
        "width"?: string;
    }
    interface IntrinsicElements {
        "github-button": GithubButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "github-button": LocalJSX.GithubButton & JSXBase.HTMLAttributes<HTMLGithubButtonElement>;
        }
    }
}
