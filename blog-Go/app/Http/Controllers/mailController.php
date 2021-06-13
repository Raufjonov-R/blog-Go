<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
class mailController extends Controller
{
    public function send(){
        Mail::send(['text'=>'emails.TestMail'],['name' => 'Rahimjon'], function($message){
          $message->to('raufjonov1998@gmail.com','to raufjonov')->subject('Test email');
          $message->from('raufjonov1998@gmail.com','raufjonov');
          echo "Email has been send";
        });
    }
}
