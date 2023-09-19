import { CanDeactivateFn } from '@angular/router';

export const canDeactivateAuthenticateGuard: CanDeactivateFn<unknown> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  return true;
};
