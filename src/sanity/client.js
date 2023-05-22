import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";


export const client = createClient({
  projectId: "u479d7jr",
  dataset: "production",
  apiVersion: "2021-11-16",
  useCdn: true,
  token:
    "skffbStkZWYO1rpjZZxBTkS1EUOdL8bjkb1cA6hFsw9SRB2QSPIlKa2HpTf52HzkbVrOf7N44gk44twfOZnKerYQT6r1idifuOKFxqDUBMoFj3tYsfW1WPrrOXxTpNlDYGaUVZFDssoQi3GiqE0zdbTrlYcJpZCBeLuBtSC6XaGL2L9nY9wa",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
