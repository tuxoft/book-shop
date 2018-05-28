import { KeycloakService } from 'keycloak-angular';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        // await keycloak.init({ config: 'assets/keycloak.json' });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
}
