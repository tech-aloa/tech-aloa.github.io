---
layout: post
title:  "AWS Solutions Architect - Associate (SAA-C02) 문제풀이"
author: john
categories: [ Travel ]
image: assets/images/16.jpg
---

<img src="/assets/images/AWS/SAA_C02_01.PNG"/>

정답은 <span class="spoiler">A 입니다.</span>

Application Load Balancer의 Health Check에 대한 문제입니다. ALB(listener)는 인스턴스들의 상태를 확인하기 위해 당신이 지정해놓은 프로토콜과 포트로 주기적으로 target group에게 요청을 보냅니다. 그리고, 트래픽을 오직 장애가 없는 타겟에만 보냅니다. 당신은 트래픽 내용별 다른 target group에게 request를 보내라는 rule을 리스너에 지정할 수 있습니다. 만약에 장애가 발생한 타겟이 있다면, 해당 인스턴스에는 요청을 보내는 것을 중지합니다.

<img src="/assets/images/AWS/SAA_C02_02.PNG"/>

정답은 <span class="spoiler">D 입니다.</span>

SQS는 큐로부터 메시지를 가져오는 방식에 있어서, short polling과 long polling을 제공한다. short polling은 빈 대기열이라도 즉시 응답을 하며, long polling은 메시지가 있을 때만 응답을 하므로 더 저렴한 방식이다. 본 문제에서는 빈 응답수(empty receives)를 최소화하여 비용을 줄이고자하므로, long polling으로 바꾸어야 한다. long polling은 ReceiveMessageWaitTimeSeconds(수신메시지 대기 시간)을 늘림으로써 적용할 수 있다. 

<img src="/assets/images/AWS/SAA_C02_03.PNG"/>

정답은 <span class="spoiler">B 입니다.</span>

AWS Storage Gateway는 클라우드 스토리지에 데이터를 안전하게 저장하면서도 잦은 접근이 필요한 데이터는 온프레미스에 캐싱하여 짧은 지연시간을 제공합니다. 본 문제에서 CTO 는 낮은 지연시간을 원하므로 Storage Gateway를 고려할 수 있고, 하드웨어 비용을 절감하고자 하므로 cache mode를 고려할 수 있습니다.

A: AWS Transfer ->S3에 파일을 전송하기 위한 SFT, FTP등의 파일 송수신 서비스입니다.<br/>
B: Volume Gateway (cached mode) -> 캐시모드에서 주 데이터는 S3에 저장되며, 빈번하게 접근되는 데이터는 로컬 캐쉬에 저장됩니다. <br/>
C: AWS DataSync ->온프레미스와 AWS 스토리지간 데이터 이동을 지원하는 서비스입니다.<br/>
D: Volume Gateway (stored mode) -> 주 데이터는 로컬에 저장되며, 전체 데이터 셋에 대한 낮은 지연시간을 제공합니다. 이는 비동기적으로 AWS에 백업됩니다. <br/>

<img class="question" src="/assets/images/AWS/SAA_C02_04.PNG"/>

정답은 <span class="spoiler">A,B 입니다.</span>

일반적인 예로 VPC 내의 퍼블릭 서브넷에는 웹서버를 두고 프라이빗 서브넷에는 DB서버를 두는 웹사이트가 있습니다. 퍼블릿 서브넷의 인스턴스는 인터넷에 아웃바운드 트래픽(인터넷->인스턴스)을 전송할 수 있지만, 프라이빗 서브넷은 인터넷과 연결이 되있지 않습니다. 하지만, 프라이빗 서브넷의 인바운드는 필요가 없더라도 인스턴스의 펌웨어 혹은 주기적인 업데이트로 인해 아웃바운드 트래픽이 허용되어야 할 경우가 있습니다. 본 문제는 니와 같이 프라이빗 서브넷 안에 있는 인스턴스의 소프트웨어 패치가 필요한 상황입니다. 이런 경우, 퍼블릭 서브넷에서 NAT(Network Address Translation)게이트웨이를 생성한 후, 프라이빗 네트워크의 라우팅 테이블 업데이트 하여 패치를 가져올 수 있습니다. 

- Public subnet : Internet Gateway / ELB / Public IP, Elastic IP / Net Instance
- Private subnet : private ip / internet inbound, outbound x / connection w/ other subnets

<img class="question" src="/assets/images/AWS/SAA_C02_05.PNG"/>

정답은 <span class="spoiler">A,B 입니다.</span>


<img class="question" src="/assets/images/AWS/SAA_C02_06.PNG"/>



<img class="question" src="/assets/images/AWS/SAA_C02_07.PNG"/>
<img class="question" src="/assets/images/AWS/SAA_C02_08.PNG"/>
<img class="question" src="/assets/images/AWS/SAA_C02_09.PNG"/>
정답은 <span class="spoiler">A,B 입니다.</span>

<table>

<th>
	<td>-</td>
	<td>S3 Glacier Deep Archive</td>
	<td>S3 Glacier</td>
	<td>S3 Standard IA</td>
	<td>S3 Standard</td>
</th>
<tr>
	<td>-</td>
	<td>GB당 0.00099 USD</td>
	<td>GB당 0.004 USD</td>
	<td>GB당 0.0125 USD</td>
	<td>자주 액세스하는 데이터</td>
</tr>
<tr>
	<td>-</td>
	<td>GB당 0.00099 USD</td>
	<td>GB당 0.004 USD</td>
	<td>GB당 0.0125 USD</td>
	<td>GB당 0.021 USD</td>
</tr>
</table>

<img class="question" src="/assets/images/AWS/SAA_C02_10.PNG"/>

정답은 <span class="spoiler">A,B 입니다.</span>

<img class="center" src="/assets/images/AWS/SAA_C02_10_01.png"/>

A. 온디맨드 인스턴스 : 
- 장기 약정이 없다<br/>
- 중단되어서는 안되는 어플리케이션 적합하다<br/>
- Amazon EC2에서 처음으로 개발 또는 시험 중인 어플리케이션<br/>

B. 예약 인스턴스 : 
- 1-3년 장기 약정이 있다<br/>
- 안정적인 수요를 가진 어플리케이션에 적합하다<br/>

C. 스팟 인스턴스 : 
- 스팟가격이 최대입찰가격보다 적을시, 인스턴스가 실행되며, 스팟가격이 최대입찰가격보다 높을시, 인스턴스가 종료된다(Spot instance interruption)<br/>
- 따라서, 중단될 수 있는 어플리케이션에 적합하다<br/>

<img src="/assets/images/AWS/SAA_C02_10_02.png"/>