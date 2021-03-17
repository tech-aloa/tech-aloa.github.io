---
layout: post
title:  "AWS Solutions Architect - Associate (SAA-C01) 문제풀이"
author: sal
categories: [ Lifestyle ]
tags: [ France ]
image: assets/images/2.jpg
rating: 4.5
---
//문제 

정답은 <span class="spoiler">D 입니다.</span>

Access Key 보관에 대한 문제입니다. Access Key 를 가진 어떠한 사람도 당신과 같은 권한을 가질 수 있으므로 이를 가지지 않는 것이 가장 좋습니다. IAM 을 사용하여서 IAM 사용자에게 적정한 권한을 주세요. 만약, 이미 루트 Access Key 를 가지고 있다면, 이를 IAM 사용자 Access Key 로 대체하고, 이를 비활성화하거나 제거하세요. 

//문제 

정답은 <span class="spoiler">B,D 입니다.</span>

Stateless 웹 서버는 세션 정보를 서버에 저장하지 않습니다. Stateful 서비스 같은 경우, 클라이언트 A 가 검증된 사용자인지 확인하기 위해 서버에 저장된 세션을 확인합니다. 하지만, 트래픽의 급증으로 서버 확장(Scale-out)이 필요할 때, Stateful 서비스 같은 경우, 세션 정보를 옮겨주는 부수적인 일을 하여야 합니다. <그림>에서도 보듯이 Stateless 웹 서버는 두 개 이상의 서버가 동일한 세션 데이터를 참조하므로 효율적으로 관리할 수 있습니다.

//그림 

DynamoDB, ElastiCache 를 고려할 수 있습니다. 적용사례(<a href="https://amzn.to/3vz2Y2x">DynamoDB</a>, <a href="https://amzn.to/3bRP4Rh">ElastiCache</a>)를 참조하세요.

A: CloudWatch -> 리소스의 지표(Metrics)를 모니터링합니다. </br>
B: DynamoDB -> NoSQL 데이터베이스입니다. </br>
C: Elastic Load Balancing -> 트래픽을 분산합니다. </br>
D: ElastiCache -> 인메모리에 저장되어 빠른 속도를 지원합니다. </br>
E: Storage Gateway  -> 낮은 지연 시간으로 클라우드 데이터를 접근하는 하이브리드 저장 서비스입니다. </br>

//그림 

//문제 

정답은 <span class="spoiler">B 입니다.</span>

본 문제에서 집중해야 할 단어는 Durability(내구성)입니다. 데이터를 오래 보존하기 위해서 의도치 않은 작업으로부터 보호되어야 합니다. S3에서 버전 시스템은 파일의 수정 및 삭제를 기록해둠으로써, 이전 버전 내용을 유지할 수 있습니다. 반면 snapshot 은 snapshot 생성 후 발생한 작업에 대한 기록은 없으므로 데이터 유실이 더 클 수 있습니다. EC2 instance storage 는 EC2 에 종료/중지와 함께 손실되므로 수명 주기가 짧습니다(Ephemeral). 내구성이 중요한 데이터는 이곳에 보관되지 않도록 주의하여야 합니다. 

