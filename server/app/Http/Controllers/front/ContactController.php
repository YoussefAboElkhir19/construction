<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactEmail;
class ContactController extends Controller
{
    //
    public function index(Request $request){
        $validator = Validator::make($request->all(),[
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            
        ]);
        if($validator->fails()){
            return response()->json([
                'status' => false,
                'message' => $validator->errors(),
            ]);

        }
        // Email Data 
        $Maildata=[
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'subject' => $request->subject,
            'message' => $request->message,
        ];
        Mail::to('essamy688@gmail.com')->send(new ContactEmail($Maildata));
        return response()->json([
            'status' => true,
            'message' => 'Email Sent Successfully',
        ]);
    }
}
