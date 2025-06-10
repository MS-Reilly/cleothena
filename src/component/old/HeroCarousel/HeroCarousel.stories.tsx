import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import HeroCarousel from "./HeroCarousel";
import FullScreenHero from "../FullScreenHero/FullScreenHero";
import HeroContentWrapper from "../FullScreenHero/HeroContentWrapper";

// Example image imports. Replace with real image paths
import image1 from "../../Assets/images/image1.jpg";
import image2 from "../../Assets/images/image2.jpg";
import image3 from "../../Assets/images/image3.jpg";

import RumiLogo from "../../Assets/images/Logo1.svg";

const meta: Meta<typeof HeroCarousel> = {
  title: "Components/HeroCarousel - Horizontal",
  component: HeroCarousel,
  argTypes: {
    autoPlay: { control: "boolean" },
    autoPlayInterval: { control: "number" },
  },
};
export default meta;

type Story = StoryObj<typeof HeroCarousel>;

export const HorizontalSlider: Story = {
  args: {
    autoPlay: false,
    autoPlayInterval: 5000,
    children: (
      <>
        <FullScreenHero
          image={image2}
          overlay={false}
          overlayColor="rgba(0, 0, 0, 0.28)"
          style={{ height: "90vh" }}
        >
          <HeroContentWrapper
            overlayColor="#00ADA9"
            gradientDirection="to right"
          >
            <div
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              <AnimatedLogo logo={RumiLogo} size={"200px"} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "16px",
                }}
              >
                <p>Cuidamos a tu mascota como parte de nuestra familia.</p>
              </div>
            </div>
          </HeroContentWrapper>
        </FullScreenHero>

        <FullScreenHero
          image={image1}
          overlay
          overlayColor="rgba(0, 0, 0, 0.28)"
        >
          <HeroContentWrapper>
            <div
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              Bienvenido a{" "}
              <span style={{ display: "flex", gap: "1px" }}>
                <span style={{ color: "#FF9F1A" }}>R</span>
                <span style={{ color: "#FFB516" }}>u</span>
                <span style={{ color: "#2EC4B6" }}>M</span>
                <span style={{ color: "#00ADA9" }}>i</span>
              </span>{" "}
              Pet Care
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "16px",
              }}
            >
              <p>Cuidamos a tu mascota como parte de nuestra familia.</p>
            </div>
          </HeroContentWrapper>
        </FullScreenHero>

        <FullScreenHero
          image={image3}
          overlay
          overlayColor="rgba(74, 74, 74, 0.28)"
        >
          <HeroContentWrapper>
            <div
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              Bienvenido a{" "}
              <span style={{ display: "flex", gap: "1px" }}>
                <span style={{ color: "#FF9F1A" }}>R</span>
                <span style={{ color: "#FFB516" }}>u</span>
                <span style={{ color: "#2EC4B6" }}>M</span>
                <span style={{ color: "#00ADA9" }}>i</span>
              </span>{" "}
              Pet Care
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "16px",
              }}
            >
              <p>Cuidamos a tu mascota como parte de nuestra familia.</p>
            </div>
          </HeroContentWrapper>
        </FullScreenHero>
      </>
    ),
  },
};
