import React from "react";
import { StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import { SvgUri } from "react-native-svg";
import { useQuery } from "react-query";

type TransactionImageProps = {
  imageUrl: string;
  width: string | number;
  height: string | number;
};

const defaultImagePath = "../../../assets/icons/alert-circle-outline.png";

const TransactionImageComponent = ({
  imageUrl,
  width,
  height,
}: TransactionImageProps) => {
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

  const imageExtension = imageUrl.split(".").pop();
  const useSVG = imageExtension === "svg" && !useDefault;

  return (
    <>
      <SvgUri
        width={useSVG ? width : 0}
        height={useSVG ? height : 0}
        uri={useSVG ? imageUrl : ""}
      />
      <FastImage
        source={useDefault ? require(defaultImagePath) : { uri: imageUrl }}
        style={styles(width, height, useSVG).image}
        resizeMode="contain"
      />
    </>
  );
};

export const TransactionImage = React.memo(TransactionImageComponent);

const styles = (
  width: string | number,
  height: string | number,
  hide: boolean,
) =>
  StyleSheet.create({
    image: {
      display: hide ? "none" : "flex",
      width: width,
      minHeight: height,
      height: height,
    },
  });
