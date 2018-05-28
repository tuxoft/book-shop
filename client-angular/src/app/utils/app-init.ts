import { KeycloakService } from 'keycloak-angular';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        await keycloak.init({
          config: 'assets/keycloak.json',
          initOptions: { onLoad: 'check-sso' , checkLoginIframe: false },
          bearerExcludedUrls: [
            '^(?!/admin.*$).*',
          ],
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
}
