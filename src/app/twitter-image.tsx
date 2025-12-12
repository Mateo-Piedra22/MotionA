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
                <div
                    style={{
                        fontSize: 100,
                        fontWeight: 700,
                        background: 'linear-gradient(135deg, #4E3629 0%, #5C3D30 50%, #321414 100%)',
                        backgroundClip: 'text',
                        color: 'transparent',
                    }}
                >
                    MotionA
                </div>
                <div
                    style={{
                        fontSize: 32,
                        color: '#5C3D30',
                        marginTop: 16,
                    }}
                >
                    Software Development Company
                </div>
            </div>
        ),
        { ...size }
    );
}
