import { Options } from './model/types';

export class Paths<T extends string> {
  constructor(private routePaths: Record<T, string>) {}

  static getLinkWithParams = (link: string, params: Record<string, string>) => {
    return Object.entries(params).reduce(
      (acc, [key, value]) => acc.replace(`:${key}`, value),
      link,
    );
  };

  getRoutePath(routeName: T, options?: Options) {
    return Paths.getLinkWithParams(
      this.routePaths[routeName],
      options && options.params ? options.params : {},
    );
  }
}
