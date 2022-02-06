import React, { useMemo, useState } from "react";
import { View, Image, StyleSheet, Alert } from "react-native";
import { SvgUri } from "react-native-svg";
import { useQuery } from "react-query";
import { Loader } from "../Loader/Loader";

type TransactionImageProps = {
  imageUrl: string;
  width: string | number;
  height: string | number;
};

export const TransactionImage = ({
  imageUrl,
  width,
  height,
}: TransactionImageProps) => {
  const imageExtension = useMemo(() => imageUrl.split(".").pop(), [imageUrl]);

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
      // <View style={{ width, minHeight: height }} />
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
