import {Composition, Folder} from 'remotion';
import {DemoComposition, demoCompositionSchema} from './DemoComposition';
import {
  PluginLaunchComposition,
  pluginLaunchDurationInFrames,
  pluginLaunchSchema
} from './PluginLaunchComposition';
import {
  SquareSocialComposition,
  squareSocialCompositionSchema
} from './SquareSocialComposition';

export const RemotionRoot: React.FC = () => {
  return (
    <Folder name="Marketing-Demos">
      <Composition
        id="Demo"
        component={DemoComposition}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        schema={demoCompositionSchema}
        defaultProps={{
          title: 'Landing Page Demo',
          subtitle: 'Remotion setup is ready',
          accentColor: '#0ea5e9',
          motionPreset: 'smooth'
        }}
      />
      <Composition
        id="SquareSocial"
        component={SquareSocialComposition}
        durationInFrames={150}
        fps={30}
        width={1080}
        height={1080}
        schema={squareSocialCompositionSchema}
        defaultProps={{
          title: 'Figma Specs',
          subtitle: 'From selected node to production-ready handoff in minutes',
          badgeLabel: 'NEW',
          theme: 'ocean'
        }}
      />
      <Composition
        id="PluginLaunch60"
        component={PluginLaunchComposition}
        durationInFrames={pluginLaunchDurationInFrames}
        fps={30}
        width={1920}
        height={1080}
        schema={pluginLaunchSchema}
        defaultProps={{
          productName: 'Figma Specs',
          launchTagline:
            'Generate compact, agent-ready specs with less context waste.',
          audience: 'For designers and developers shipping with AI coding agents.'
        }}
      />
    </Folder>
  );
};
