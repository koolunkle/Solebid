package com.sesac.solbid.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.transaction.TransactionSystemException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import jakarta.servlet.http.HttpServletRequest;

@RestControllerAdvice
public class GlobalExceptionHandler {

    /// 기본적으로 spring이 잡아주는 익셉션
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<Map<String, Object>> handleIllegalArgument(IllegalArgumentException e) {
        return buildErrorResponse("매개변수 값이 잘못되었습니다: " + e.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<Map<String, Object>> handleDataIntegrity(DataIntegrityViolationException e) {
        return buildErrorResponse("DB 제약조건 위반: " + e.getMessage(), HttpStatus.CONFLICT);
    }

    @ExceptionHandler(TransactionSystemException.class)
    public ResponseEntity<Map<String, Object>> handleTransaction(TransactionSystemException e) {
        return buildErrorResponse("트랜잭션 실패: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<Map<String, Object>> handleHttpMessage(HttpMessageNotReadableException e) {
        return buildErrorResponse("요청 값이 잘못되었습니다: " + e.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<Map<String, Object>> handleTypeMismatch(MethodArgumentTypeMismatchException e) {
        return buildErrorResponse("요청 파라미터 타입이 잘못되었습니다: " + e.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Object>> handleValidation(MethodArgumentNotValidException e) {
        String errorMessage = e.getBindingResult().getFieldErrors().stream()
                .map(error -> error.getField() + ": " + error.getDefaultMessage())
                .findFirst()
                .orElse("유효성 검사 실패");
        return buildErrorResponse("유효성 검사 오류: " + errorMessage, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, Object>> handleAll(HttpServletRequest request, Exception e) throws Exception {
        String uri = request.getRequestURI();
        if (uri.startsWith("/files/")) {
            throw e;
        }
        return buildErrorResponse("서버 내부 오류: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /// 우리가 수동으로 던지는 익셉션
    /// @GetMapping("/test")
    /// public String test() {
    ///     throw new CustomException(ErrorCode.DUPLICATE_RESOURCE); }

    @ExceptionHandler(CustomException.class)
    public ResponseEntity<Map<String, Object>> handleCustomException(CustomException e) {
        ErrorCode code = e.getErrorCode();
        Map<String, Object> body = new HashMap<>();
        body.put("success", false);
        body.put("message", code.getMessage());
        body.put("code", code.getStatus());
        return ResponseEntity.status(code.getStatus()).body(body);
    }

    private ResponseEntity<Map<String, Object>> buildErrorResponse(String message, HttpStatus status) {
        Map<String, Object> body = new HashMap<>();
        body.put("success", false);
        body.put("message", message);
        body.put("code", status.getCode());
        return ResponseEntity.status(status.getCode()).body(body);
    }
}
