// Google Apps Script 코드
// Google Sheets에 문의 데이터를 저장하는 웹 앱

function doPost(e) {
  try {
    let data;
    
    // JSON 또는 폼 데이터 처리
    if (e.postData.type === 'application/json') {
      data = JSON.parse(e.postData.contents);
    } else {
      // 폼 데이터 처리
      data = e.parameter;
    }
    
    // 입력 데이터 검증
    if (!data.name || !data.email || !data.message) {
      return createResponse({
        success: false,
        message: '필수 입력 항목이 누락되었습니다.'
      });
    }
    
    // 스프레드시트 열기
    const sheet = SpreadsheetApp.openById('1uMDAnO1Vv6cqfGWi6IbuynxnDqLBs4Y3oVFxc6_Ob9U').getActiveSheet();
    
    // 현재 시간 가져오기 (한국 시간)
    const timestamp = new Date();
    
    // 데이터를 행으로 추가
    const row = [
      timestamp,
      data.name.trim(),
      data.email.trim(),
      data.phone ? data.phone.trim() : '',
      data.company ? data.company.trim() : '',
      data.message.trim(),
      data.language || 'ko'
    ];
    
    sheet.appendRow(row);
    
    // 성공 응답 반환
    return createResponse({
      success: true,
      message: '문의가 성공적으로 저장되었습니다.'
    });
      
  } catch (error) {
    // 에러 로깅
    console.error('Error in doPost:', error);
    
    // 에러 응답 반환
    return createResponse({
      success: false,
      message: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
    });
  }
}

// CORS 헤더를 포함한 응답 생성 함수
function createResponse(data) {
  const response = ContentService.createTextOutput(JSON.stringify(data));
  response.setMimeType(ContentService.MimeType.JSON);
  return response;
}

function doGet(e) {
  // GET 요청에 대한 응답 (테스트용)
  return ContentService
    .createTextOutput(JSON.stringify({
      message: 'Google Apps Script 웹 앱이 정상적으로 작동합니다.'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
