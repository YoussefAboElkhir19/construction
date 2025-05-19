<?php

namespace App\Http\Controllers\front;
use App\Models\Service;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    //fucntion return all services Active
    public function index() {
        $services = Service::where('status', 1)->orderBy('created_at', 'desc')->get();
        return response()->json([
            'status' => true,
            'data' => $services
        ]);    }
    // function return last services accepting to ex: ?limit=2
    public function lastServices(Request $request) {
        $services = Service::where('status', 1)
        ->take($request->get('limit'))
        ->orderBy('created_at', 'desc')->get();
        return response()->json([
            'status' => true,
            'data' => $services
        ]);    }
        //fucntion return Singel service Active
        public function singleService($id) {
            $service = Service::find($id);
                if($service == null){
                     return response()->json([
                 'status' => true,
                    'message' => 'Service Not Found'
                     ]);  

             }
             return response()->json([
                    'status' => true,
                'data' => $service
                 ]);   
     }
}
