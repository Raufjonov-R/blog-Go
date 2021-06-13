<?php

use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/', function () {
//     return view('index');
// });

// Route::get('/', 'MainController@index');

// Route::get('send-mail', function(){
//   $detalis = [
//       'title' => 'Mail from Raufjonov',
//       'body' => 'This is from testing email using smtp'
//   ];
//   Mail::to('raufjonov1998@gmail.com')->send(new App\Mail\TestMail($detalis));
//   echo "Email has been send";
// });

Route::get('/send', 'mailController@send');

Route::get('/sendemail', 'SendEmailController@index');
Route::post('/sendemail/send', 'SendEmailController@send');
 
