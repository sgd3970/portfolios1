import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // 데이터 유효성 검사
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '모든 필드를 입력해주세요.' },
        { status: 400 }
      );
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '올바른 이메일 형식을 입력해주세요.' },
        { status: 400 }
      );
    }

    // 여기에 실제 데이터베이스 저장 로직을 추가할 수 있습니다.
    // 예: MongoDB, PostgreSQL 등에 데이터 저장
    
    // 현재는 콘솔에 로그만 출력 (개발 단계)
    console.log('새로운 문의 접수:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    // 이메일 발송 로직을 여기에 추가할 수 있습니다.
    // 예: SendGrid, Nodemailer 등을 사용한 이메일 전송

    // 성공 응답
    return NextResponse.json(
      { 
        message: '문의가 성공적으로 접수되었습니다.',
        id: `inquiry_${Date.now()}` // 임시 ID
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('문의 처리 중 오류:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' },
      { status: 500 }
    );
  }
}

// GET 요청 처리 (선택사항)
export async function GET() {
  return NextResponse.json(
    { message: '문의 API 엔드포인트가 정상적으로 작동 중입니다.' },
    { status: 200 }
  );
} 