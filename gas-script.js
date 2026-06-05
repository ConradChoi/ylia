/**
 * Google Apps Script - YLIA Contact Form Webhook
 * 
 * 구글 시트의 [확장 프로그램] -> [Apps Script]에 복사하여 붙여넣으세요.
 * 변경 사항을 적용한 뒤, "새 배포"를 통해 웹 앱으로 배포하고 생성된 URL을 `.env.local`의 `GAS_ENDPOINT`에 설정하세요.
 */

function doPost(e) {
  try {
    // 1. 요청 바디 파싱
    var jsonString = e.postData.contents;
    var data = JSON.parse(jsonString);
    
    // 2. 구글 시트 연결 (활성화된 시트)
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // 3. 첫 행(헤더)이 비어있으면 헤더 자동 생성
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["접수 시간", "이름", "이메일", "전화번호", "회사명", "문의 내용", "언어"]);
      
      // 헤더 스타일 적용 (굵은 글씨, 회색 배경)
      var headerRange = sheet.getRange(1, 1, 1, 7);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#f3f4f6");
    }
    
    // 4. 데이터 추출
    var timestamp = new Date();
    var name = data.name || "";
    var email = data.email || "";
    var phone = data.phone || "";
    var company = data.company || "";
    var message = data.message || "";
    var language = data.language || "ko";
    
    // 5. 시트에 데이터 추가
    sheet.appendRow([timestamp, name, email, phone, company, message, language]);
    
    // 6. Next.js API가 검증하는 { success: true } 형식으로 JSON 응답 반환
    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error("Error writing to sheet: " + error.toString());
    return ContentService.createTextOutput(JSON.stringify({ 
      success: false, 
      message: error.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
