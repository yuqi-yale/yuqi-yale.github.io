// @ts-ignore
import tracker from '@middleware.io/agent-apm-nextjs';

export function register() {
    tracker.track({
        serviceName: "monitor",
        accessToken: "mukekdlgqiccrwsqhlbihwmjrtxpjouaizzl",
        target: "https://rmewh.middleware.io"
    });
}