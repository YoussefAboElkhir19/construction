
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\admin\ServiceController;
use App\Http\Controllers\admin\ProjectController;
use App\Http\Controllers\admin\ArticleController;
use App\Http\Controllers\admin\TestimonalController;
use App\Http\Controllers\admin\TempImageController;
use App\Http\Controllers\admin\DashbordController;
use App\Http\Controllers\front\ServiceController as FrontServiceController;
use App\Http\Controllers\front\ProjectController as FrontProjectController;
use App\Http\Controllers\front\ArticleController as FrontArticleController;
use App\Http\Controllers\front\ContactController;

// Route to Auth 
Route::post('authenticate', [AuthenticationController::class, 'authenticate']);
// Routes to front Services
Route::get('get-services', [FrontServiceController::class, 'index']);
Route::get('get-last-services', [FrontServiceController::class, 'lastServices']);
Route::get('get-service/{id}', [FrontServiceController::class, 'singleService']);
// Routes to front Projects
Route::get('get-projects', [FrontProjectController::class, 'index']);
Route::get('get-last-projects', [FrontProjectController::class, 'LastProjects']);
Route::get('get-project/{id}', [FrontProjectController::class, 'singleProject']);
// Routes to front Articles
Route::get('get-articles', [FrontArticleController::class, 'index']);
Route::get('get-last-articles', [FrontArticleController::class, 'LastArticle']);

use Illuminate\Support\Facades\Mail;

Route::get('/test-email', function () {
    Mail::raw('This is a test email from Mailtrap!', function ($message) {
        $message->to('essamy688@gmail.com') // Replace with any email address
                ->subject('Test Email');
    });

    return 'Test email sent!';
});
// Route::get('/user', function (Request $request) {
    //     return $request->user();
    // })->middleware('auth:sanctum');
    
    // Protected Routes
    Route::group(['middleware' => ['auth:sanctum']], function () {
        Route::get('dashbord', [DashbordController::class, 'index']);
        Route::get('logout', [AuthenticationController::class, 'logout']);
        //TempImage  Routes Store data
        Route::post('temp-images', [TempImageController::class, 'store']);
        //Service Routes 
        Route::post('services', [ServiceController::class, 'store']);
        Route::get('services', [ServiceController::class, 'index']);
        Route::put('services/{id}', [ServiceController::class, 'update']);
        Route::get('services/{id}', [ServiceController::class, 'show']);
        Route::delete('services/{id}', [ServiceController::class, 'destroy']);
        // =======================================================================
        // Project Routes
        Route::post('projects', [ProjectController::class, 'store']);
        Route::get('projects', [ProjectController::class, 'index']);
        Route::put('projects/{id}', [ProjectController::class, 'update']);
        Route::get('projects/{id}', [ProjectController::class, 'show']);
        Route::delete('projects/{id}', [ProjectController::class, 'destroy']);
        // =======================================================================
        // Article Routes
        Route::post('articles', [ArticleController::class, 'store']);
        Route::get('articles', [ArticleController::class, 'index']);
        Route::put('articles/{id}', [ArticleController::class, 'update']);
        Route::get('articles/{id}', [ArticleController::class, 'show']);
        Route::delete('articles/{id}', [ArticleController::class, 'destroy']);
        // =======================================================================
        // Testimonal Routes
        Route::post('testimonals', [TestimonalController::class, 'store']);
        Route::get('testimonals', [TestimonalController::class, 'index']);
        Route::put('testimonals/{id}', [TestimonalController::class, 'update']);
        Route::get('testimonals/{id}', [TestimonalController::class, 'show']);
        Route::delete('testimonals/{id}', [TestimonalController::class, 'destroy']);


});