package com.bcnet.viimpt.controller;

import com.bcnet.viimpt.domain.User;
import com.bcnet.viimpt.domain.UserPrincipal;
import com.bcnet.viimpt.dto.DeleteResponseDto;
import com.bcnet.viimpt.dto.UserResponseDto;
import com.bcnet.viimpt.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/{userId}")
    public UserResponseDto userDetails(@PathVariable Long userId){
        return userService.findUser(userId);
    }

    @GetMapping("/account/profile")
    public UserResponseDto userAccountDetails(@AuthenticationPrincipal UserPrincipal userPrincipal) {
        return userService.findUser(userPrincipal.getId());
    }

    @DeleteMapping("/account")
    public DeleteResponseDto deleteUser(@AuthenticationPrincipal UserPrincipal userPrincipal) {
        userService.deleteUser(userPrincipal.getId());
        return new DeleteResponseDto("탈퇴 되었습니다.");
    }
}