export class Article {
  votes: number;
  title: string;
  link: string;

  constructor(title: string, link: string, votes?: number) {
    this.link = link;
    this.title = title;
    this.votes = votes || 0;
  }

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }

  domain(): string {
    try {
      // e.g. http://foo.com/path/to/bar
      const splitLink: string[] = this.link.split('//');
      // e.g. foo.com/path/to/bar
      const domainAndPath: string = splitLink.length > 1 ? splitLink[1] : splitLink[0];
      // e.g. foo.com
      return domainAndPath.split('/')[0];
    } catch (err) {
      return null;
    }
  }
}
