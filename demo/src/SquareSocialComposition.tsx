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

export const squareSocialCompositionSchema = z.object({
  title: z.string().trim().min(4).max(28),
  subtitle: z.string().trim().min(12).max(90),
  badgeLabel: z.enum(['NEW', 'LIVE', 'BETA']),
  theme: z.enum(['ocean', 'forest', 'sunset'])
});

type SquareSocialCompositionProps = z.infer<typeof squareSocialCompositionSchema>;

const themeMap: Record<
  SquareSocialCompositionProps['theme'],
  {bg: string; accent: string; text: string}
> = {
  ocean: {
    bg: 'radial-gradient(circle at 20% 20%, #082f49 0%, #0f172a 55%, #020617 100%)',
    accent: '#38bdf8',
    text: '#e2e8f0'
  },
  forest: {
    bg: 'radial-gradient(circle at 20% 20%, #14532d 0%, #0f172a 55%, #020617 100%)',
    accent: '#4ade80',
    text: '#dcfce7'
  },
  sunset: {
    bg: 'radial-gradient(circle at 20% 20%, #7c2d12 0%, #111827 55%, #030712 100%)',
    accent: '#fb923c',
    text: '#ffedd5'
  }
};

export const SquareSocialComposition: React.FC<SquareSocialCompositionProps> = ({
  title,
  subtitle,
  badgeLabel,
  theme
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const activeTheme = themeMap[theme];

  const enter = spring({
    frame,
    fps,
    config: {damping: 160, stiffness: 130},
    durationInFrames: 34
  });

  const opacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp'
  });

  const scale = interpolate(enter, [0, 1], [0.96, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp'
  });

  return (
    <AbsoluteFill
      style={{
        background: activeTheme.bg,
        justifyContent: 'center',
        alignItems: 'center',
        color: activeTheme.text,
        fontFamily: 'Geist, Inter, system-ui, sans-serif'
      }}
    >
      <Sequence from={0} durationInFrames={150} premountFor={30}>
        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            transform: `scale(${scale})`,
            opacity
          }}
        >
          <div
            style={{
              width: 860,
              height: 860,
              borderRadius: 42,
              padding: 56,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid rgba(203, 213, 225, 0.25)',
              background: 'rgba(2, 6, 23, 0.45)',
              boxShadow: '0 36px 100px rgba(2, 6, 23, 0.5)'
            }}
          >
            <div
              style={{
                alignSelf: 'flex-start',
                padding: '10px 16px',
                borderRadius: 999,
                background: activeTheme.accent,
                color: '#0f172a',
                fontWeight: 700,
                fontSize: 28
              }}
            >
              {badgeLabel}
            </div>
            <div>
              <h1
                style={{
                  margin: 0,
                  fontSize: 108,
                  lineHeight: 0.92,
                  letterSpacing: -2.8
                }}
              >
                {title}
              </h1>
              <p
                style={{
                  margin: '22px 0 0',
                  fontSize: 38,
                  lineHeight: 1.18,
                  maxWidth: 680
                }}
              >
                {subtitle}
              </p>
            </div>
            <div
              style={{
                width: 280,
                borderRadius: 22,
                overflow: 'hidden',
                border: '1px solid rgba(148, 163, 184, 0.3)'
              }}
            >
              <Img
                src={staticFile('preview.jpg')}
                style={{display: 'block', width: '100%', height: 'auto'}}
              />
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
