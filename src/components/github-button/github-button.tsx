import { Component, Prop, h } from '@stencil/core';
import WhiteLogo from './svg/github-white.svg';
import BlackLogo from './svg/github-black.svg';

@Component({
  tag: 'github-button',
  styleUrl: 'github-button.css',
  shadow: true,
})
export class GitHubButton {
  /**
   * Repo's owner
   */
  @Prop() user!: string;

  /**
   * Repo's name
   */
  @Prop() repo!: string;

  /**
   * Theme
   */
  @Prop() theme: 'light' | 'dark' = 'light';

  /**
   * Width
   */
  @Prop() width = '24px';

  render() {
    const logo = this.theme === 'light' ? BlackLogo : WhiteLogo;
    const wrapperStyle = {
      width: this.width,
      height: this.width,
    };

    return (
      <div class={`wrapper ${this.theme}`} style={wrapperStyle}>
        <a class="link" href={`https://github.com/${this.user}/${this.repo}`} target="_blank" rel="noopener noreferrer" title={`Go to ${this.user}/${this.repo}`}>
          <img class="logo" src={logo} alt="GitHub logo" />
        </a>
      </div>
    );
  }
}
