<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Testimonal;
class TestimonalController extends Controller
{
    public function index(){
        $testimonals = Testimonal::where('status' , 1)->orderBy('created_at' , 'desc')->get();
        return response()->json([
            'status' => true,
            'data' => $testimonals

        ]);
    }
    //Function to Get  Latest Data of testimonals
    public function LastTestimonal (Request $request){
        $testimonals = Testimonal::
        where('status' , 1)
        ->orderBy('created_at' , 'desc')
        ->take($request->get('limit'))
        ->get();
        return response()->json([
            'status' => true,
            'data' => $testimonals

        ]);
    }
}
