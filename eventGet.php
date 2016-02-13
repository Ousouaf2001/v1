<?php
$url = "http://api.chessfamily.net/api/query";

$data = array(
  'authentication' => 'chessfemily',
  'action' => 'geolocation',
  'address' => '4',
);

$content = '';
foreach($data as $key=>$value) { $content .= $key.'='.$value.'&'; }

$curl = curl_init($url);


curl_setopt($curl, CURLOPT_HEADER, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, $content);

$json_response = curl_exec($curl);

$status = curl_getinfo($curl, CURLINFO_HTTP_CODE);

curl_close($curl);

$response = json_decode($json_response, true);

header('Content-Type: application/json');
echo json_encode($response);
?>
