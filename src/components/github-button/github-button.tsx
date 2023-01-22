import { Component, Prop, h } from '@stencil/core';
import WhiteLogo from './svg/github-white.svg';
import BlackLogo from './svg/github-black.svg';

@Component({
  tag: 'github-button',
  styleUrl: 'github-button.css',
  shadow: true,
})
export class GitHubButton {
  @Prop() user!: string;
  @Prop() repo!: string;
  @Prop() theme: 'light' | 'dark';
  @Prop() width: string;

  render() {
    const theme = this.theme ?? 'light';
    const width = this.width ?? '24px';

    const logo = theme === 'light' ? BlackLogo : WhiteLogo;
    const wrapperStyle = {
      width: width,
      height: width,
    };

    return (
      <div class={`wrapper ${theme}`} style={wrapperStyle}>
        <a class="link" href={`https://github.com/${this.user}/${this.repo}`} target="_blank" rel="noopener noreferrer" title={`Go to ${this.user}/${this.repo}`}>
          <img class="logo" src={logo} alt="GitHub logo" />
        </a>
      </div>
    );
  }
}
