import React from 'react';
import {
  Audio,
  AbsoluteFill,
  Easing,
  Img,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame
} from 'remotion';
import {z} from 'zod';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';

const INTRO_DURATION = 100;
const BRIDGE_ONE_DURATION = 132;
const STEP_ONE_DURATION = 150;
const BRIDGE_TWO_DURATION = 132;
const STEP_TWO_DURATION = 150;
const BRIDGE_THREE_DURATION = 132;
const COMPARE_DURATION = 190;
const BRIDGE_FOUR_DURATION = 132;
const BEFORE_AFTER_DURATION = 200;
const BRIDGE_FIVE_DURATION = 132;
const CONTROLS_DURATION = 170;
const OUTRO_DURATION = 180;
const SCENE_DURATIONS = [
  INTRO_DURATION,
  BRIDGE_ONE_DURATION,
  STEP_ONE_DURATION,
  BRIDGE_TWO_DURATION,
  STEP_TWO_DURATION,
  BRIDGE_THREE_DURATION,
  COMPARE_DURATION,
  BRIDGE_FOUR_DURATION,
  BEFORE_AFTER_DURATION,
  BRIDGE_FIVE_DURATION,
  CONTROLS_DURATION,
  OUTRO_DURATION
];
const TOTAL_DURATION = SCENE_DURATIONS.reduce((sum, duration) => sum + duration, 0);
const gsapLikeEase = Easing.bezier(0.22, 1, 0.36, 1);

export const pluginLaunchSchema = z.object({
  productName: z.string().trim().min(3).max(36),
  launchTagline: z.string().trim().min(10).max(96),
  audience: z.string().trim().min(8).max(64)
});

export type PluginLaunchProps = z.infer<typeof pluginLaunchSchema>;

type MotionVariant = 'up' | 'left' | 'right' | 'zoom' | 'down';

const sceneInOutStyle = (
  frame: number,
  durationInFrames: number,
  variant: MotionVariant
): React.CSSProperties => {
  const enter = interpolate(frame, [0, 22], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: gsapLikeEase
  });
  const exit = interpolate(frame, [durationInFrames - 16, durationInFrames], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: gsapLikeEase
  });
  const opacityIn = interpolate(enter, [0, 1], [0, 1]);
  const opacityOut = interpolate(exit, [0, 1], [1, 0]);

  const enterX =
    variant === 'left'
      ? interpolate(enter, [0, 1], [-88, 0])
      : variant === 'right'
        ? interpolate(enter, [0, 1], [88, 0])
        : 0;
  const enterY =
    variant === 'up'
      ? interpolate(enter, [0, 1], [52, 0])
      : variant === 'down'
        ? interpolate(enter, [0, 1], [-52, 0])
        : 0;
  const exitX =
    variant === 'left'
      ? interpolate(exit, [0, 1], [0, 70])
      : variant === 'right'
        ? interpolate(exit, [0, 1], [0, -70])
        : 0;
  const exitY =
    variant === 'up'
      ? interpolate(exit, [0, 1], [0, -36])
      : variant === 'down'
        ? interpolate(exit, [0, 1], [0, 36])
        : 0;
  const scaleIn = variant === 'zoom' ? interpolate(enter, [0, 1], [1.08, 1]) : 1;
  const scaleOut = variant === 'zoom' ? interpolate(exit, [0, 1], [1, 0.95]) : 1;

  return {
    opacity: Math.min(opacityIn, opacityOut),
    transform: `translate3d(${enterX + exitX}px, ${enterY + exitY}px, 0) scale(${scaleIn * scaleOut})`
  };
};

const lineIn = (frame: number, delay: number, duration = 18): React.CSSProperties => {
  const p = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: gsapLikeEase
  });
  return {
    opacity: p,
    transform: `translateY(${interpolate(p, [0, 1], [20, 0])}px)`
  };
};

const SceneShell: React.FC<{
  variant: MotionVariant;
  durationInFrames: number;
  children: React.ReactNode;
}> = ({variant, durationInFrames, children}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={sceneInOutStyle(frame, durationInFrames, variant)} className="px-[84px] py-[64px]">
      {children}
    </AbsoluteFill>
  );
};

const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const textStyle = lineIn(frame, 8, 20);

  return (
    <SceneShell variant="up" durationInFrames={INTRO_DURATION}>
      <AbsoluteFill className="items-center justify-center">
        <div style={textStyle} className="max-w-[1500px] text-center">
          <div className="text-[92px] font-light leading-[1.02] tracking-[-0.04em] text-brand-text">
            <div>Generate Figma specs for</div>
            <div className="inline-flex items-center gap-5">
              <Img src={staticFile('brands/claude.svg')} className="h-[0.78em] w-[0.78em]" />
              <span>Claude Code</span>
              <span>and</span>
              <Img src={staticFile('brands/chatgpt.svg')} className="h-[0.78em] w-[0.78em]" />
              <span>Codex</span>
            </div>
            <div>without burning too many tokens.</div>
          </div>
        </div>
      </AbsoluteFill>
    </SceneShell>
  );
};

const InsightScene: React.FC<{
  durationInFrames: number;
  variant: MotionVariant;
  lines: string[];
  note: string;
}> = ({durationInFrames, variant, lines, note}) => {
  const frame = useCurrentFrame();

  return (
    <SceneShell variant={variant} durationInFrames={durationInFrames}>
      <AbsoluteFill className="items-center justify-center">
        <div className="max-w-[1540px] text-center">
          <div className="text-[72px] font-light leading-[1.04] tracking-[-0.04em] text-brand-text">
            {lines.map((line, index) => (
              <div key={line} style={lineIn(frame, 8 + index * 10, 18)}>
                {line}
              </div>
            ))}
          </div>
          <p
            style={lineIn(frame, 8 + lines.length * 10 + 8, 20)}
            className="mx-auto mt-7 max-w-[1180px] text-[30px] leading-[1.25] text-brand-text-muted"
          >
            {note}
          </p>
        </div>
      </AbsoluteFill>
    </SceneShell>
  );
};

const StepOneScene: React.FC = () => {
  const frame = useCurrentFrame();
  const zoom = interpolate(frame, [0, STEP_ONE_DURATION], [1.025, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp'
  });

  return (
    <SceneShell variant="left" durationInFrames={STEP_ONE_DURATION}>
      <Card className="h-full rounded-[34px] border-brand-border bg-brand-panel shadow-[0_22px_64px_rgba(0,0,0,0.08)]">
        <CardHeader className="space-y-3 px-10 pt-8">
          <p className="text-[13px] font-semibold uppercase tracking-[0.11em] text-brand-text-subtle">Step 1</p>
          <CardTitle className="text-[52px] leading-[1.03] tracking-[-0.03em] text-brand-text">
            Run the plugin from your selected frame.
          </CardTitle>
        </CardHeader>
        <CardContent className="px-10 pb-10 pt-2">
          <div className="overflow-hidden rounded-3xl border border-brand-border bg-brand-surface">
            <Img
              src={staticFile('plugin-shots/run-plugin-in-figma.png')}
              style={{width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${zoom})`}}
            />
          </div>
        </CardContent>
      </Card>
    </SceneShell>
  );
};

const StepTwoScene: React.FC = () => {
  const frame = useCurrentFrame();
  const zoom = interpolate(frame, [0, STEP_TWO_DURATION], [1.02, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp'
  });

  return (
    <SceneShell variant="right" durationInFrames={STEP_TWO_DURATION}>
      <Card className="h-full rounded-[34px] border-brand-border bg-brand-panel shadow-[0_22px_64px_rgba(0,0,0,0.08)]">
        <CardHeader className="space-y-3 px-10 pt-8">
          <p className="text-[13px] font-semibold uppercase tracking-[0.11em] text-brand-text-subtle">Step 2</p>
          <CardTitle className="text-[50px] leading-[1.03] tracking-[-0.03em] text-brand-text">
            Get visual specs + compact YAML in one pass.
          </CardTitle>
        </CardHeader>
        <CardContent className="px-10 pb-10 pt-2">
          <div className="overflow-hidden rounded-3xl border border-brand-border bg-brand-surface">
            <Img
              src={staticFile('plugin-shots/plugin-sepcs-generated.png')}
              style={{width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${zoom})`}}
            />
          </div>
        </CardContent>
      </Card>
    </SceneShell>
  );
};

const SpecPreviewScene: React.FC = () => {
  const frame = useCurrentFrame();
  const left = lineIn(frame, 0);
  const right = lineIn(frame, 8);

  return (
    <SceneShell variant="up" durationInFrames={COMPARE_DURATION}>
      <Card className="h-full rounded-[34px] border-brand-border bg-brand-panel shadow-[0_22px_64px_rgba(0,0,0,0.08)]">
        <CardHeader className="space-y-3 px-10 pt-8">
          <CardTitle className="text-[50px] leading-[1.03] tracking-[-0.03em] text-brand-text">
            Specs and landing preview side by side.
          </CardTitle>
        </CardHeader>
        <CardContent className="grid h-[720px] grid-cols-2 gap-8 px-10 pb-10 pt-1">
          <div style={left} className="flex flex-col overflow-hidden rounded-3xl border border-brand-border bg-brand-surface">
            <p className="px-4 py-3 text-[16px] font-medium text-brand-text-subtle">Specs output</p>
            <Img
              src={staticFile('plugin-shots/plugin-sepcs-generated.png')}
              style={{width: '100%', height: '100%', objectFit: 'cover'}}
            />
          </div>
          <div style={right} className="flex flex-col overflow-hidden rounded-3xl border border-brand-border bg-brand-surface">
            <p className="px-4 py-3 text-[16px] font-medium text-brand-text-subtle">Landing preview</p>
            <Img
              src={staticFile('blog-landing-page.jpg')}
              style={{
                width: '100%',
                height: '140%',
                objectFit: 'cover',
                objectPosition: 'top center'
              }}
            />
          </div>
        </CardContent>
      </Card>
    </SceneShell>
  );
};

const BeforeAfterScene: React.FC = () => {
  const frame = useCurrentFrame();
  const bars = [
    {
      label: 'Prompt tokens',
      beforeLabel: '80k+',
      afterLabel: '~20k',
      beforePct: 100,
      afterPct: 25
    },
    {
      label: 'Retry loops',
      beforeLabel: '8',
      afterLabel: '3',
      beforePct: 80,
      afterPct: 30
    },
    {
      label: 'Handoff time',
      beforeLabel: '45m',
      afterLabel: '15m',
      beforePct: 75,
      afterPct: 33
    }
  ];

  return (
    <SceneShell variant="right" durationInFrames={BEFORE_AFTER_DURATION}>
      <Card className="h-full rounded-[34px] border-brand-border bg-brand-panel shadow-[0_22px_64px_rgba(0,0,0,0.08)]">
        <CardHeader className="space-y-3 px-10 pt-8">
          <CardTitle className="text-[50px] leading-[1.03] tracking-[-0.03em] text-brand-text">
            Before vs After
          </CardTitle>
          <p className="text-[24px] text-brand-text-muted">
            Cleaner specs reduce noise and speed up delivery.
          </p>
        </CardHeader>
        <CardContent className="grid h-[700px] grid-cols-2 gap-8 px-10 pb-10 pt-1">
          <div className="rounded-3xl border border-brand-border bg-brand-surface p-6">
            <p className="mb-5 text-[16px] font-semibold uppercase tracking-[0.11em] text-brand-text-subtle">
              Before
            </p>
            <div className="space-y-6">
              {bars.map((bar, index) => {
                const width = interpolate(
                  frame,
                  [index * 8, index * 8 + 20],
                  [0, bar.beforePct],
                  {
                    extrapolateLeft: 'clamp',
                    extrapolateRight: 'clamp',
                    easing: gsapLikeEase
                  }
                );
                return (
                  <div key={`before-${bar.label}`}>
                    <div className="mb-2 flex items-center justify-between text-[18px]">
                      <span className="text-brand-text-muted">{bar.label}</span>
                      <span className="font-semibold text-brand-text">{bar.beforeLabel}</span>
                    </div>
                    <div className="h-4 rounded-full bg-brand-border">
                      <div
                        className="h-4 rounded-full bg-brand-orange"
                        style={{width: `${width}%`}}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-brand-border bg-brand-surface p-6">
            <p className="mb-5 text-[16px] font-semibold uppercase tracking-[0.11em] text-brand-text-subtle">
              After
            </p>
            <div className="space-y-6">
              {bars.map((bar, index) => {
                const width = interpolate(
                  frame,
                  [index * 8 + 6, index * 8 + 26],
                  [0, bar.afterPct],
                  {
                    extrapolateLeft: 'clamp',
                    extrapolateRight: 'clamp',
                    easing: gsapLikeEase
                  }
                );
                return (
                  <div key={`after-${bar.label}`}>
                    <div className="mb-2 flex items-center justify-between text-[18px]">
                      <span className="text-brand-text-muted">{bar.label}</span>
                      <span className="font-semibold text-brand-text">{bar.afterLabel}</span>
                    </div>
                    <div className="h-4 rounded-full bg-brand-border">
                      <div
                        className="h-4 rounded-full bg-brand-blue"
                        style={{width: `${width}%`}}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </SceneShell>
  );
};

const ControlsScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <SceneShell variant="zoom" durationInFrames={CONTROLS_DURATION}>
      <Card className="h-full rounded-[34px] border-brand-border bg-brand-panel shadow-[0_22px_64px_rgba(0,0,0,0.08)]">
        <CardHeader className="space-y-3 px-10 pt-8">
          <CardTitle className="text-[50px] leading-[1.03] tracking-[-0.03em] text-brand-text">
            Keep output deterministic with clear controls.
          </CardTitle>
        </CardHeader>
        <CardContent className="grid h-[720px] grid-cols-2 gap-8 px-10 pb-10 pt-1">
          <div style={lineIn(frame, 0)} className="flex flex-col overflow-hidden rounded-3xl border border-brand-border bg-brand-surface">
            <p className="px-4 py-3 text-[16px] font-medium text-brand-text-subtle">Generate options</p>
            <Img
              src={staticFile('plugin-shots/19-generate-all-primary-sections-enabled.png')}
              style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top'}}
            />
          </div>
          <div style={lineIn(frame, 8)} className="flex flex-col overflow-hidden rounded-3xl border border-brand-border bg-brand-surface">
            <p className="px-4 py-3 text-[16px] font-medium text-brand-text-subtle">Agents tab</p>
            <Img
              src={staticFile('plugin-shots/13-agents-tab-top-auto-detect.png')}
              style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top'}}
            />
          </div>
        </CardContent>
      </Card>
    </SceneShell>
  );
};

const OutroScene: React.FC<PluginLaunchProps> = ({productName}) => {
  const frame = useCurrentFrame();
  const pulse = interpolate(frame, [0, OUTRO_DURATION], [0.96, 1.04], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp'
  });

  return (
    <SceneShell variant="down" durationInFrames={OUTRO_DURATION}>
      <Card className="h-full rounded-[34px] border-brand-border bg-brand-panel shadow-[0_22px_64px_rgba(0,0,0,0.08)]">
        <CardContent className="flex h-full flex-col items-center justify-center px-14 text-center">
          <div className="mb-6 h-20 w-20 rounded-3xl border border-brand-border bg-brand-surface p-4" style={{transform: `scale(${pulse})`}}>
            <Img src={staticFile('brands/figma-logo.svg')} style={{width: '100%', height: '100%'}} />
          </div>
          <Badge className="rounded-full border border-brand-border bg-brand-surface px-3 py-1 text-[14px] text-brand-text-muted">
            Now available
          </Badge>
          <h2 className="mt-5 text-[72px] leading-[1.02] tracking-[-0.032em] text-brand-text">{productName}</h2>
          <p className="mt-4 max-w-[1220px] text-[34px] leading-[1.25] text-brand-text-muted">
            Faster design-to-code handoff for teams using AI coding agents.
          </p>
          <div className="mt-9 flex items-center gap-3">
            <Button className="h-12 rounded-full bg-brand-action px-6 text-[16px] text-brand-inverse hover:bg-brand-action-hover">
              Get Plugin
            </Button>
            <Button variant="outline" className="h-12 rounded-full border-brand-border bg-brand-panel px-6 text-[16px]">
              View GitHub
            </Button>
          </div>
        </CardContent>
      </Card>
    </SceneShell>
  );
};

export const PluginLaunchComposition: React.FC<PluginLaunchProps> = (props) => {
  const timeline = SCENE_DURATIONS.reduce<number[]>((acc, duration, index) => {
    if (index === 0) {
      acc.push(0);
      return acc;
    }
    acc.push(acc[index - 1] + SCENE_DURATIONS[index - 1]);
    return acc;
  }, []);

  return (
    <AbsoluteFill className="bg-brand-canvas text-brand-text">
      <Audio
        src={staticFile('sigmamusicart-background-music-468515.mp3')}
        volume={0.18}
      />
      <AbsoluteFill className="bg-[radial-gradient(circle_at_12%_8%,#ffffff_0%,#f8f7f6_45%,#f1efec_100%)]" />
      <div className="absolute left-10 top-8 h-28 w-28 rounded-full bg-brand-lavender-1/40 blur-[55px]" />
      <div className="absolute bottom-10 right-14 h-36 w-36 rounded-full bg-brand-orange/20 blur-[65px]" />

      <Sequence from={timeline[0]} durationInFrames={INTRO_DURATION} premountFor={20}>
        <IntroScene />
      </Sequence>
      <Sequence from={timeline[1]} durationInFrames={BRIDGE_ONE_DURATION} premountFor={20}>
        <InsightScene
          durationInFrames={BRIDGE_ONE_DURATION}
          variant="zoom"
          lines={['Start in Figma.', 'No workflow change needed.']}
          note="Select your frame and run the plugin."
        />
      </Sequence>
      <Sequence from={timeline[2]} durationInFrames={STEP_ONE_DURATION} premountFor={20}>
        <StepOneScene />
      </Sequence>
      <Sequence from={timeline[3]} durationInFrames={BRIDGE_TWO_DURATION} premountFor={20}>
        <InsightScene
          durationInFrames={BRIDGE_TWO_DURATION}
          variant="up"
          lines={['The plugin extracts structure,', 'not just pixels.']}
          note="Anatomy, layout and design intent are captured for coding agents."
        />
      </Sequence>
      <Sequence from={timeline[4]} durationInFrames={STEP_TWO_DURATION} premountFor={20}>
        <StepTwoScene />
      </Sequence>
      <Sequence from={timeline[5]} durationInFrames={BRIDGE_THREE_DURATION} premountFor={20}>
        <InsightScene
          durationInFrames={BRIDGE_THREE_DURATION}
          variant="left"
          lines={['From spec output', 'to production UI']}
          note="See specs and landing implementation context side by side."
        />
      </Sequence>
      <Sequence from={timeline[6]} durationInFrames={COMPARE_DURATION} premountFor={20}>
        <SpecPreviewScene />
      </Sequence>
      <Sequence from={timeline[7]} durationInFrames={BRIDGE_FOUR_DURATION} premountFor={20}>
        <InsightScene
          durationInFrames={BRIDGE_FOUR_DURATION}
          variant="right"
          lines={['Less token waste,', 'fewer retries.']}
          note="The same design can be shipped with a smaller, clearer prompt."
        />
      </Sequence>
      <Sequence from={timeline[8]} durationInFrames={BEFORE_AFTER_DURATION} premountFor={20}>
        <BeforeAfterScene />
      </Sequence>
      <Sequence from={timeline[9]} durationInFrames={BRIDGE_FIVE_DURATION} premountFor={20}>
        <InsightScene
          durationInFrames={BRIDGE_FIVE_DURATION}
          variant="down"
          lines={['Stay deterministic', 'with clear controls.']}
          note="Tune sections and output format before generation."
        />
      </Sequence>
      <Sequence from={timeline[10]} durationInFrames={CONTROLS_DURATION} premountFor={20}>
        <ControlsScene />
      </Sequence>
      <Sequence from={timeline[11]} durationInFrames={OUTRO_DURATION} premountFor={20}>
        <OutroScene {...props} />
      </Sequence>
    </AbsoluteFill>
  );
};

export const pluginLaunchDurationInFrames = TOTAL_DURATION;
