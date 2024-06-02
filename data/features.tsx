import {
  HandIcon,
  Pencil1Icon,
  Pencil2Icon,
  RocketIcon,
} from "@radix-ui/react-icons";
import { Handshake } from "lucide-react";

export const features = [
  {
    title: "Quick & Easy Gauge Entry",
    description:
      "We have pumpers currently using ogPumper who had no computer experience. They were able to pick it up day one with very little training.",
    icon: <RocketIcon className="w-6 h-6" />,
  },
  {
    title: "Instant Production Data    ",

    description:
      "Available - in the office, at home or anywhere else - for management & office staff as soon as gauges are entered by the pumper.",

    icon: <Pencil2Icon className="w-6 h-6" />,
  },
  {
    title: "Affordable for Big & Small ",
    description:
      "Our pricing is simple. No special hardware to buy or contract to sign. Includes all support and maintenance.Tiered discounts available..",

    icon: <Handshake className="w-6 h-6" />,
  },
];
