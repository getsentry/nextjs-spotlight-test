# nextjs-spotlight-test

This app is used as a test of Sentry's telemetry, particularly within Spotlight.


```shell
pnpm install
docker-compose up -d # if you aren't running Spotlight's Sidecar already
```

```shell
pnpm build && pnpm start
# or pnpm dev, tho goal is to test prod capabilities
```
