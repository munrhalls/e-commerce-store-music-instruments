import app from './server.mts';

app.listen({ port: 8443 }, (err, address) => {
  if (err !== null) {
    console.error(err);
    process.exit(1);
  }
  console.log(`app listening at ${address}`);
});
