<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Testimonal;
// to save a Image
use App\Models\TempImage;
use Illuminate\Support\Facades\File;
// to intervention image 
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
class TestimonalController extends Controller
{
       //
       public function index(){
        $testimonals = Testimonal::orderBy('created_at' , "desc")->get();
        return response()->json([
            'status' => true,
            'data' => $testimonals
        ]);
        
    }
    public function store(Request $request){
       
        
        // validation 
        $validator = Validator::make($request->all(),[
            'testimonal' => 'required',
            'citation' => 'required',
            ]
            
        );
        // check validator is error
        if($validator->fails()){
            return response()->json([
                'status' =>false,
                'errors' => $validator->errors()
            ]);
        }
        // save request data after validation
        $testimonal = new Testimonal;
        $testimonal->testimonal = $request->testimonal;
        $testimonal->citation = $request->citation;
        $testimonal->designation = $request->designation;

        $testimonal->status = $request->status;
        $testimonal->save();
        // Save A Image
        if($request->imageId > 0){
            $tempImage = TempImage::find($request->imageId); 
            if($tempImage != null){
                $extArray = explode('.',$tempImage->name);
                $ext = last($extArray);
                
                
                $fileName = strtotime('now').$testimonal->id.'.'.$ext;
                
                // Create small Thumnail image
                $sourcePath = public_path('upload/temp/'.$tempImage->name); 
                $SmalldestPath = public_path('upload/testimonals/small/'.$fileName); 
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(500, 600);
                $image->save($SmalldestPath);
                
                
                
                // Create Large Thumnail image
                $largedestPath = public_path('upload/testimonals/large/'.$fileName); 
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->scaleDown(1200);
                $image->save($largedestPath);
                
                $testimonal->image = $fileName;
                $testimonal->save();
                
            }
            
        }
        // response if no error
        return response()->json([
            'status' =>true,
            'message' => "Created testimonal successfully"
        ]);
    }
    public function update(Request $request , $id){
        $testimonal = Testimonal::find($id);
        // check if testimonal is not exist 
        if($testimonal==null){
            return response()->json([
                'status' => false,
                'message' => "testimonal not found",
            ]);
        }
        
        
        // validation 
        $validator = Validator::make($request->all(),[
            'testimonal' => 'required',
            'citation' => 'required',
            ]
            
        );
        // check validator is error
        if($validator->fails()){
            return response()->json([
                'status' =>false,
                'errors' => $validator->errors()
            ]);
        }
          // save request data after validation
          $testimonal->testimonal = $request->testimonal;
          $testimonal->citation = $request->citation;
          $testimonal->designation = $request->designation;
          $testimonal->status = $request->status;
          $testimonal->save();
        // Save A Image
        if($request->imageId > 0){
            $oldImage = $testimonal->image;
            $tempImage = TempImage::find($request->imageId); 
            if($tempImage != null){
                $oldImage = $project->image;
                $extArray = explode('.',$tempImage->name);
                $ext = last($extArray);
                
                
                $fileName = strtotime('now').$testimonal->id.'.'.$ext;
                
                // Create small Thumnail image
                $sourcePath = public_path('upload/temp/'.$tempImage->name); 
                $SmalldestPath = public_path('upload/testimonals/small/'.$fileName); 
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(500, 600);
                $image->save($SmalldestPath);
                
                
                
                // Create Large Thumnail image
                $largedestPath = public_path('upload/testimonals/large/'.$fileName); 
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->scaleDown(1200);
                $image->save($largedestPath);
                
                $testimonal->image = $fileName;
                $testimonal->save();
                if($oldImage != ''){
                    File::delete(public_path('upload/atestimonals/large/'.$oldImage));
                    File::delete(public_path('upload/testimonals/small/'.$oldImage));
                }
                
            }
            
        }
        // response if no error
        return response()->json([
            'status' =>true,
            'message' => "Updated testimonal successfully"
        ]);
    }
    public function show(Request $request , $id){
        $testimonal = Testimonal::find($id);
        if($testimonal == null){
            return response()->json([
                'status' =>false,
                'error' => " testimonal not found"
            ]);

        }
        return response()->json([
            'status' =>true,
            'data' => $testimonal
        ]);
    }
    // Delete Function
    public function destroy(Request $request , $id){
        $testimonal = Testimonal::find($id);
        if($testimonal == null){
            return response()->json([
                'status' =>false,
                'error' => " testimonal not found"
            ]); 
        }
        $testimonal->delete();
        return response()->json([
            'status' =>true,
            'error' => "Deleted testimonal successfully"
        ]); 

    }
}
