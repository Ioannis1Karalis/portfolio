<?php

switch ($_SERVER['REQUEST_METHOD']) {
case("POST"):
            header("Access-Control-Allow-Origin: *");
            
            $json = file_get_contents('php://input');
            $params = json_decode($json);
    
            $email = htmlspecialchars($params->email);
            $name = htmlspecialchars($params->name);
            $message = nl2br(htmlspecialchars($params->message));
    
            $recipient = 'hello@ikaralis.com';  
            $subject = "Neue Projektanfrage von: $name";
            
            $htmlMessage = "
            <div style='font-family: Arial, sans-serif; color: #333333; max-width: 600px; margin: 0 auto; border: 1px solid #333333; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);'>
                
                <div style='background-color: #3DCFB6; padding: 25px; text-align: center;'>
                    <h2 style='color: #ffffff; margin: 0; font-size: 24px;'>Neue Anfrage 🚀</h2>
                </div>
                
                <div style='padding: 30px; background-color: #ffffff;'>
                    <table style='width: 100%; margin-bottom: 25px;'>
                        <tr>
                            <td style='padding-bottom: 10px; width: 80px; color: #888888;'><strong>Name:</strong></td>
                            <td style='padding-bottom: 10px; font-size: 16px;'>{$name}</td>
                        </tr>
                        <tr>
                            <td style='color: #888888;'><strong>E-Mail:</strong></td>
                            <td style='font-size: 16px;'>
                                <a href='mailto:{$email}' style='color: #3DCFB6; text-decoration: none; font-weight: bold;'>{$email}</a>
                            </td>
                        </tr>
                    </table>
                    
                    <h3 style='border-bottom: 2px solid #3DCFB6; padding-bottom: 8px; margin-bottom: 15px; color: #3DCFB6; font-size: 18px;'>Nachricht:</h3>
                    
                    <div style='background-color: #f9f9f9; padding: 20px; border-left: 4px solid #3DCFB6; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.6; color: #444444;'>
                        {$message}
                    </div>
                </div>
                
                <div style='background-color: #333333; padding: 30px 20px; text-align: center;'>
                    <img src='https://ikaralis.com/assets/img/logo.png' alt='Ioannis Logo' style='height: 40px; width: auto; margin-bottom: 15px; display: inline-block;'/>
                    
                    <div style='font-size: 12px; color: rgba(255, 255, 255, 0.6); line-height: 1.5;'>
                        Diese E-Mail wurde automatisch von deinem Kontaktformular auf <strong style='color: #3DCFB6;'>ikaralis.com</strong> gesendet.
                    </div>
                </div>
            </div>
            ";
    
            $headers   = array();
            $headers[] = 'MIME-Version: 1.0';
            $headers[] = 'Content-type: text/html; charset=utf-8';

            $headers[] = "From: Portfolio Kontakt <noreply@ikaralis.com>";

            mail($recipient, $subject, $htmlMessage, implode("\r\n", $headers));
            break;
        default: 
            header("Allow: POST", true, 405);
            exit;
    } 
