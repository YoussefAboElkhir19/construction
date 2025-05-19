<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Models\TempImage;
use Illuminate\Http\Request;
// to intervention image 
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
class TempImageController extends Controller
{
    //
    public function store(Request $request){
        $validator = Validator::make($request->all(),
        [
            'image' => 'required|mimes:jpeg,png,jpg,gif',
        ]);
        if($validator->fails())
        {
            return response()->json([
                'status' =>false,
                'errors' => $validator->errors('image')
            ]);
        }
        // Check if the image is valid
        $image = $request->image;
            // Check if the image is not empty
        if(!empty($image)){

            // to get extenstion of image
            $ext = $image->getClientOriginalExtension();
            // name of image + extension
            $imageName = strtotime('now') . '.' . $ext;
    
            // take object from model And Save in DB 
            $model = new TempImage();
            $model->name = $imageName;
            $model->save();
    
    
            // Save  image to public/temp
            $image->move(public_path('upload/temp') , $imageName);

            // Create small Thumnail image
            $sourcePath = public_path('upload/temp/'.$imageName); 
            $destPath = public_path('upload/temp/thumb/'.$imageName); 
            $manager = new ImageManager(Driver::class);
            $image = $manager->read($sourcePath);
            $image->coverDown(300, 300);
            $image->save($destPath);

            
            // return response 
            return response()->json([
                'status'=>true,
                'data' => $model,
                'message' => 'Image uploaded successfully'
            ]);
        }





    }
}
