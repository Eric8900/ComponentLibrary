import Card from "@/components/markup/card";
import CardGrid from "@/components/markup/cardgrid";
import RoutedLink from '@/components/markup/link';
import Mermaid from "@/components/markup/mermaid";
import Note from "@/components/markup/note";
import Pre from "@/components/ui/pre";
import { Step, StepItem } from "@/components/markup/step";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import dynamic from 'next/dynamic';

const FileTree = dynamic(() => import('@/components/markup/filetree'), {
    ssr: false,
});

import { Folder, File } from '@/components/markup/filetree';
import SocialProofDemo from "@/components/demos/SocialProofDemo";
import GradientButtonDemo from "@/components/demos/GradientButtonDemo";
import SponsorSectionDemo from "@/components/demos/SponsorSectionDemo";
import StaggeredHoverDemo from "@/components/demos/StaggeredHoverDemo";
import AppleVisionProDemo from "@/components/demos/AppleVisionProDemo";

export const components = {
    a: RoutedLink as React.ComponentType<React.AnchorHTMLAttributes<HTMLAnchorElement>>,
    Card,
    CardGrid,
    FileTree,
    Folder,
    File,
    Mermaid,
    Note,
    pre: Pre,
    Step,
    StepItem,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    SocialProofDemo,
    GradientButtonDemo,
    SponsorSectionDemo,
    StaggeredHoverDemo,
    AppleVisionProDemo
};