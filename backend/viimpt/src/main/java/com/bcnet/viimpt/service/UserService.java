package com.bcnet.viimpt.service;

import com.bcnet.viimpt.domain.User;
import com.bcnet.viimpt.dto.UserResponseDto;
import com.bcnet.viimpt.repository.UserRepository;
import com.bcnet.viimpt.util.errorutil.CustomException;
import com.bcnet.viimpt.util.errorutil.ErrorCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public UserResponseDto findUser(Long userId){
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new CustomException(ErrorCode.MEMBER_NOT_FOUND));

        return new UserResponseDto(user);
    }

    public void deleteUser(Long userId){
        userRepository.findById(userId)
                .orElseThrow(() -> new CustomException(ErrorCode.MEMBER_NOT_FOUND));

        userRepository.deleteById(userId);
    }
}