import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./styles";
// import { breakpoints } from './foundations/breakpoints';

import { CardComponent } from "./card/Card";
import { CardBodyComponent } from "./card/CardBody";
import { CardHeaderComponent } from "./card/CardHeader";
import { MainPanelComponent } from "./layout/MainPanel";
import { PanelContentComponent } from "./layout/PanelContent";
import { PanelContainerComponent } from "./layout/PanelContainer";
// import { mode } from "@chakra-ui/theme-tools";
export default extendTheme(
  // { breakpoints }, // Breakpoints
  globalStyles,
  CardComponent, // Card component
  CardBodyComponent, // Card Body component
  CardHeaderComponent, // Card Header component
  MainPanelComponent, // Main Panel component
  PanelContentComponent, // Panel Content component
  PanelContainerComponent // Panel Container component
);
