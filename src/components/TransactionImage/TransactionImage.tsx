import React from "react";
import { Image } from "react-native";
import { SvgUri } from "react-native-svg";
import { useQuery } from "react-query";

type TransactionImageProps = {
  imageUrl: string;
  width: string | number;
  height: string | number;
};

const TransactionImageComponent = ({
  imageUrl,
  width,
  height,
}: TransactionImageProps) => {
  const imageExtension = imageUrl.split(".").pop();

  // Doing this because .svg icons return 403
  // and I couldn't find a library for displaying SVGs
  // giving the possibility to have a fallback file
  const { data: useDefault } = useQuery(
    imageUrl,
    async (): Promise<boolean> => {
      try {
        const res = await fetch(imageUrl);
        return !res.ok;
      } catch (e) {
        return true;
      }
    },
    { refetchOnMount: false },
  );

  const renderImage = () => {
    return imageExtension === "svg" ? (
      <SvgUri width={width} height={height} uri={imageUrl} />
    ) : (
      <Image
        source={{
          uri: imageUrl,
        }}
        style={{ width, minHeight: height }}
        resizeMode="contain"
      />
    );
  };

  const renderDefaultImage = () => (
    <Image
      source={require("../../../assets/icons/alert-circle-outline.png")}
      style={{ width, minHeight: height, height: height }}
      resizeMode="contain"
    />
  );

  return <>{useDefault ? renderDefaultImage() : renderImage()}</>;
};

export const TransactionImage = React.memo(TransactionImageComponent);
