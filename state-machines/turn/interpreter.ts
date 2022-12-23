import { interpret } from 'xstate';
import { turnStateMachine } from './machine';

// Interpret the machine, and add a listener for whenever a transition occurs.
export const service = interpret(turnStateMachine).onTransition((state) => {
  console.log(state.value);
});

// Start the service
/* service.start(); */

// Send events
/* service.send({ type: 'SOME_EVENT' }); */

// Stop the service when you are no longer using it.
/* service.stop(); */