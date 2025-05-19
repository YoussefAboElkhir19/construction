<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
// to intervention image 
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;



class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $services  = Service::orderBy('created_at', 'desc')->get();
        return response()->json([
            'status' => true,
            'data' => $services
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request , Service $service )
    {
        $request->merge(['slug' => Str::slug($request->slug)]);

        // Validation
        $validator = Validator::make($request->all(), [
            'title' => 'required', // Fixed typo from 'requird' to 'required'
            'slug' => 'required|unique:services,slug' // Fixed typo from 'requird' to 'required'
        ]);
        // Check if validation fails

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }

        // After validation, save in DB
        $service = new Service();
        $service->title = $request->title;
        // divide sentence by  -  - - - 
        $service->slug = Str::slug($request->title); ;
        $service->short_desc = $request->short_desc;
        $service->status = $request->status;
        $service->content = $request->content;
        $service->save();
        // Save Temp Image here 
        if($request->imageId > 0){
            $tempImage = TempImage::find($request->imageId); 
            if($tempImage != null){
                  $extArray = explode('.',$tempImage->name);
                  $ext = last($extArray);
                
                
                  $fileName = strtotime('now').$service->id.'.'.$ext;
                //   $image->move(public_path('upload/services') , $imageName);

                // Create small Thumnail image
                $sourcePath = public_path('upload/temp/'.$tempImage->name); 
                $SmalldestPath = public_path('upload/services/small/'.$fileName); 
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(500, 600);
                $image->save($SmalldestPath);

                
                
                // Create Large Thumnail image
                $largedestPath = public_path('upload/services/large/'.$fileName); 
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->scaleDown(1200);
                $image->save($largedestPath);
                
                $service->image = $fileName;
                $service->save();
             
            }

        }


        // if vaidation of data is success then save in DB
        return response()->json([
            'status' => true,
            'message' => 'Service Created Successfully'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //
        // finnd the service by id
        $service = Service::find($id);
        if($service == null){
            return response()->json([
                'status' => false,
                'message' => 'Error Service Not Found'
            ]);
        }
        // if id of serive is not null
        return response()->json([
            'status' => true,
            'data' => $service
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Service $service)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id )
    {
                $request->merge(['slug' => Str::slug($request->slug)]);


        // finnd the service by id
        $service = Service::find($id);
        if($service == null){
            return response()->json([
                'status' => false,
                'message' => 'Error Service Not Found'
            ]);
        }
        // Validation
        $validator = Validator::make($request->all(), [
            'title' => 'required', // Fixed typo from 'requird' to 'required'
            'slug' => 'required|unique:services,slug,'.$id.',id' // Fixed typo from 'requird' to 'required'
        ]);
        // Check if validation fails

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }

        // After validation, save in DB
        $service->title = $request->title;
        //Str  divide sentence by  -  - - - 
        $service->slug = Str::slug($request->title); ;
        $service->short_desc = $request->short_desc;
        $service->status = $request->status;
        $service->content = $request->content;
        $service->save();
        // Save Temp Image here 
        if($request->imageId > 0){
            $oldImage = $service->image;
            $tempImage = TempImage::find($request->imageId); 
            if($tempImage != null){
                  $extArray = explode('.',$tempImage->name);
                  $ext = last($extArray);
                
                
                  $fileName = strtotime('now').$service->id.'.'.$ext;
                //   $image->move(public_path('upload/services') , $imageName);

                // Create small Thumnail image
                $sourcePath = public_path('upload/temp/'.$tempImage->name); 
                $SmalldestPath = public_path('upload/services/small/'.$fileName); 
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(500, 600);
                $image->save($SmalldestPath);

                
                
                // Create Large Thumnail image
                $largedestPath = public_path('upload/services/large/'.$fileName); 
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->scaleDown(1200);
                $image->save($largedestPath);
                
                $service->image = $fileName;
                $service->save();
                if($oldImage != ''){
                    File::delete(public_path('upload/services/large/'.$oldImage));
                    File::delete(public_path('upload/services/small/'.$oldImage));
                }
            }

        }
   


        // if vaidation of data is success then save in DB
        return response()->json([
            'status' => true,
            'message' => 'Service Updated Successfully'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // finnd the service by id
        $service = Service::find($id);
        if($service == null){
            return response()->json([
                'status' => false,
                'message' => 'Error Service Not Found'
            ]);
        }
        // if id of serive is not null
        $service->delete();
        return response()->json([
            'status' => true,
            'message' => 'Deleted Service Successfully'
        ]);
    }
}
