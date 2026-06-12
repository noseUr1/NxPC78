<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="stylesheet" href="css/reset.css">
	<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="style.css">
	<link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100..900&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://use.typekit.net/dxk7knf.css">

</head>

<body>
	<div id="header">
	<?php
		date_default_timezone_set('Asia/Tokyo');
		$now = time();
		$displayStart = strtotime('2026-06-11 11:55:00');
		$displayEnd = strtotime('2026-06-19 21:00:00');
		$isPlay = ($now >= $displayStart && $now <= $displayEnd);
		?>
		<?php if ($isPlay) : ?>
			<a href="https://www.youtube.com/" class="youtubeIcon">
				<img src="./assets/images/youtube_logo.png">
		</a>
		<?php endif; ?>

		<div class="datearea">
			<div class="scroll-infinity">
				<div class="scroll-infinity__wrap">
					<ul class="scroll-infinity__list scroll-infinity__list--left">
						<li class="scroll-infinity__item--text">2026.6.19(Fri)_18:00-21:00_IAMAS GALLERY 1</li>
						<li class="scroll-infinity__item--text">2026.6.19(Fri)_18:00-21:00_IAMAS GALLERY 1</li>
						<li class="scroll-infinity__item--text">2026.6.19(Fri)_18:00-21:00_IAMAS GALLERY 1</li>
						<li class="scroll-infinity__item--text">2026.6.19(Fri)_18:00-21:00_IAMAS GALLERY 1</li>
						<li class="scroll-infinity__item--text">2026.6.19(Fri)_18:00-21:00_IAMAS GALLERY 1</li>
					</ul>
					<ul class="scroll-infinity__list scroll-infinity__list--left">
						<li class="scroll-infinity__item--text">2026.6.19(Fri)_18:00-21:00_IAMAS GALLERY 1</li>
						<li class="scroll-infinity__item--text">2026.6.19(Fri)_18:00-21:00_IAMAS GALLERY 1</li>
						<li class="scroll-infinity__item--text">2026.6.19(Fri)_18:00-21:00_IAMAS GALLERY 1</li>
						<li class="scroll-infinity__item--text">2026.6.19(Fri)_18:00-21:00_IAMAS GALLERY 1</li>
						<li class="scroll-infinity__item--text">2026.6.19(Fri)_18:00-21:00_IAMAS GALLERY 1</li>
					</ul>
				</div>
			</div>
		</div>
		<div id="firstView">
			<div class="video_bg">
				<div class="video prev">
					<video src="./assets/videos/green_pc.mp4" autoplay muted loop playsinline class="pc_only"></video>
				</div>
				<div class="video next">
					<video src="./assets/videos/purple_pc.mp4" autoplay muted loop playsinline class="pc_only"></video>
				</div>
				<div class="video prev">
					<video src="./assets/videos/movie_sp.mp4" autoplay muted loop playsinline class="sp_only"></video>
				</div>
			</div>
			<div class="logoarea">
				<lottie-player src="./assets/logo_anim.lottie.json" autoplay class="logo pc_only"></lottie-player>
				<lottie-player src="./assets/logo_sp.lottie.json" autoplay class="logo sp_only"></lottie-player>
			</div>

			<div class="scrollarea ready">
					<span class="blink">Loading...</span>
				</div>
				<div class="scrollarea scroll">
					<div class="scroll_down" id="type03">
						<a href="#">Scroll</a>
					</div>
			</div>
		</div>
	</div>
    <div id="main">
		<div class="innerarea d-none">
			<div class="infoarea">
				<div class="heading">
					info
				</div>
				<div class="contents">
					<div class="title">
						Date
					</div>
					<div class="text">
						{ 2026.6.19 (Fri) _ 18:00-21:00 }
					</div>
					<div class="title">
						Venue
					</div>
					<div class="text pc_only">
						{ IAMAS GALLERY 1_岐阜県大垣市加賀野4丁目1-7 ソフトピアジャパン センタービル3階 }
					</div>
					<div class="text sp_only">
						{ IAMAS GALLERY 1<br>岐阜県大垣市加賀野4丁目1-7<br>ソフトピアジャパン センタービル3階 }
					</div>
				</div>
				<div class="contents">
					<div class="title">
						About Nx.PC
					</div>
					<div class="text mb-0">
					クラブやライブにおけるアーティストと観客の相互作用を追求するNxPC.Lab。 メディアテクノロジーを駆使して、音楽体験を拡張し、観客を巻き込む場の臨場感を創り出す。現代のメディア体験において必要とされる対話性、参加性をデバイス、インタフェース、ネットワークといったメディアテクノロジーを駆使することで、音楽体験を拡張し、音楽空間におけるコミュニケーションを次のステージへ導くための研究開発、イベントを実施している。
					<br>実験の場としてのイベントNxPC.Liveを中心に、レクチャーやワークショップ、ネットラジオなどの活動を行っている。
					</div>
				</div>
			</div>	

			<div class="timetablearea">
				<div class="heading">
					time table
				</div>
				<div class="contents">
					<img src="./assets/images/timetable.png">
				</div>
			</div>

			<div class="performersarea">
				<div class="heading">
					Performer
				</div>
				<?php
				$file = './performers.json';
				$json = file_get_contents($file);
				$data = json_decode($json, true);

				?>

				<div class="performers">
					<?php foreach ($data as $item) : ?>
						<?php
						$images = $item['images'];
						$imageCount = count($images);
						?>
						<div class="content">
							<?php if ($imageCount == 1): ?>
								<div class="imagearea onePieceImage">
								<?php foreach ($images as $index => $imageSrc) : ?>
								<img src="<?php echo $item['images'][$index]; ?>" class="image<?php echo $index + 1; ?>">
								<?php endforeach; ?>
							</div>
							<?php elseif ($imageCount == 2): ?>
								<div class="imagearea twoPieceImage">
									<img src="<?php echo $item['images'][0]; ?>" class="image1">
									<img src="<?php echo $item['images'][1]; ?>" class="image2">
								</div>
							<?php elseif ($imageCount == 3): ?>
								<div class="imagearea threePieceImage">
									<img src="<?php echo $item['images'][0]; ?>" class="image1">
									<img src="<?php echo $item['images'][1]; ?>" class="image2">
									<img src="<?php echo $item['images'][2]; ?>" class="image3">
								</div>
							<?php endif; ?>
							<div class="title">
								<?php echo $item['teamName']; ?>
							</div>
							<div class="text">
								<?php echo $item['department']; ?>
							</div>
						</div>
					<?php endforeach; ?>
				</div>
			</div>
			<div id="footer">
			visual design: OUGA ,米田 , Yuki Yoshikawa
			<br>web: ichinose ,Tusq ,AOK
			</div>
		</div>
    </div>


	<script src="jquery-2.1.3.min.js"></script>
	<script src="bootstrap/js/bootstrap.min.js"></script>
	<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
	<script src="main.js"></script>

</body>
</html>