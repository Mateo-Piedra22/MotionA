import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'MotionA - Software Development Company';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #F5F0ED 0%, #E8DED8 100%)',
                    fontFamily: 'Georgia, serif',
                }}
            >
                {/* Background pattern */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        opacity: 0.03,
                        backgroundImage: `linear-gradient(#4E3629 1px, transparent 1px),
                                         linear-gradient(90deg, #4E3629 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                />

                {/* Logo mark */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 40,
                    }}
                >
                    <div
                        style={{
                            fontSize: 120,
                            fontWeight: 700,
                            background: 'linear-gradient(135deg, #4E3629 0%, #5C3D30 50%, #321414 100%)',
                            backgroundClip: 'text',
                            color: 'transparent',
                            letterSpacing: '-4px',
                        }}
                    >
                        MotionA
                    </div>
                </div>

                {/* Tagline */}
                <div
                    style={{
                        fontSize: 36,
                        color: '#5C3D30',
                        marginBottom: 20,
                        fontWeight: 500,
                    }}
                >
                    Software Development Company
                </div>

                {/* Description */}
                <div
                    style={{
                        fontSize: 24,
                        color: '#8B7355',
                        maxWidth: 700,
                        textAlign: 'center',
                        lineHeight: 1.4,
                    }}
                >
                    Transforming ideas into digital solutions
                </div>

                {/* Bottom accent */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 8,
                        background: 'linear-gradient(90deg, #4E3629 0%, #5C3D30 50%, #321414 100%)',
                    }}
                />

                {/* Decorative circles */}
                <div
                    style={{
                        position: 'absolute',
                        top: -100,
                        right: -100,
                        width: 300,
                        height: 300,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #4E3629 0%, transparent 60%)',
                        opacity: 0.1,
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: -80,
                        left: -80,
                        width: 250,
                        height: 250,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #321414 0%, transparent 60%)',
                        opacity: 0.08,
                    }}
                />
            </div>
        ),
        { ...size }
    );
}
