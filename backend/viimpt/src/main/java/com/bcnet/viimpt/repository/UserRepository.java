package com.bcnet.viimpt.repository;

import com.bcnet.viimpt.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByKakaoId(Long kakaoId);
    User findByEmail(String email);

}