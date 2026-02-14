import React from 'react';
import {
  AbsoluteFill,
  Img,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig
} from 'remotion';
import {z} from 'zod';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

export const demoCompositionSchema = z.object({
  title: z.string().trim().min(6).max(48),
  subtitle: z.string().trim().min(8).max(96),
  accentColor: z.string().regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/),
  motionPreset: z.enum(['smooth', 'snappy'])
});

export type DemoCompositionProps = z.infer<typeof demoCompositionSchema>;

export const DemoComposition: React.FC<DemoCompositionProps> = ({
  title,
  subtitle,
  accentColor,
  motionPreset
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const springConfig =
    motionPreset === 'smooth'
      ? {damping: 200, stiffness: 100}
      : {damping: 24, stiffness: 200};

  const enter = spring({
    frame,
    fps,
    config: springConfig,
    durationInFrames: 36
  });

  const y = interpolate(enter, [0, 1], [24, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp'
  });

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp'
  });

  return (
    <AbsoluteFill
      className="items-center justify-center bg-[radial-gradient(circle_at_20%_20%,#0b1220_0%,#070a12_45%,#02040a_100%)] text-white"
    >
      <Sequence from={0} durationInFrames={180} premountFor={30}>
        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            transform: `translateY(${y}px)`,
            opacity
          }}
        >
          <Card className="w-[960px] rounded-[28px] border-slate-400/30 bg-slate-900/70 py-0 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-md">
            <CardHeader className="gap-5 px-[72px] pt-[56px]">
              <div
                className="h-[5px] w-[140px] rounded-full"
                style={{backgroundColor: accentColor}}
              />
              <div className="flex items-center gap-3">
                <Badge
                  variant="secondary"
                  className="bg-white/10 text-slate-100 hover:bg-white/10"
                >
                  Remotion + shadcn/ui
                </Badge>
              </div>
              <CardTitle className="text-[74px] leading-[1.05] tracking-[-1.6px] text-slate-50">
                {title}
              </CardTitle>
              <CardDescription className="text-[34px] leading-[1.3] text-slate-300">
                {subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent className="px-[72px] pb-[56px] pt-2">
              <div className="mt-1 w-[360px] overflow-hidden rounded-2xl border border-slate-400/30">
                <Img
                  src={staticFile('preview.jpg')}
                  style={{display: 'block', width: '100%', height: 'auto'}}
                />
              </div>
              <div className="mt-8 flex gap-3">
                <Button
                  className="bg-white text-slate-950 hover:bg-slate-100"
                  size="lg"
                >
                  Render Ready
                </Button>
                <Button variant="outline" size="lg" className="border-white/30">
                  Style Synced
                </Button>
              </div>
            </CardContent>
          </Card>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
